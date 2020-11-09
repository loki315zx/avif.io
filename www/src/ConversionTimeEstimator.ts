import * as _ from "lodash";

interface Sample {
  time: number;
  progress: number;
}

export default class ConversionTimeEstimator {
  private samples: Sample[] = [];

  constructor(private sampleCount: number, private minimumSampleTime: number) {}

  clearSamples() {
    this.samples = [];
  }

  sample(progress: number) {
    const time = Date.now();

    if (
      this.samples.length &&
      time - _.last(this.samples).time < this.minimumSampleTime
    ) {
      return;
    }

    this.samples.push({
      time,
      progress,
    });

    if (this.samples.length > this.sampleCount) {
      this.samples = this.samples.slice(1);
    }
  }

  estimateRemainingTime(): number {
    const remainingWork = 1 - _.last(this.samples).progress;
    return remainingWork / this.averageSpeed();
  }

  private averageSpeed() {
    const diffs = _.zip(
      this.samples.slice(0, this.samples.length - 1),
      this.samples.slice(1)
    ).map(([sample, nextSample]) => ({
      time: nextSample.time - sample.time,
      progress: nextSample.progress - sample.progress,
    }));
    return _.meanBy(diffs, (diff) => diff.progress / diff.time);
  }
}
