import _ from "lodash";
import { minutesAndSeconds } from "./utils";

export default class ConversionTimeEstimator {
  private samples: Sample[] = [];
  private startTime: number;
  private estimate: number;

  private coarseMinutesEstimate: number;
  private coarseSecondsEstimate: number;

  constructor(
    private readonly samplingTime: number,
    private readonly holdTime: number
  ) {}

  start() {
    this.samples = [];
    this.startTime = Date.now();
  }

  update(progress: number) {
    const now = Date.now();

    if (
      this.samples.length &&
      now - _.last(this.samples).time < this.samplingTime
    ) {
      return;
    }

    this.samples.push({
      time: now,
      remainingTimeEstimate: this.calculateRemainingTime({
        time: now,
        progress,
      }),
    });
    this.dropOldSamples();
    this.updateRemainingTimeEstimate();
  }

  get minutes() {
    return this.coarseMinutesEstimate;
  }

  get seconds() {
    return this.coarseSecondsEstimate;
  }

  // Calculates remaining time based on conversion speed at the moment of sampling.
  private calculateRemainingTime(args: { time: number; progress: number }) {
    const { time, progress } = args;
    const remainingWork = 1 - progress;
    const speed = progress / (time - this.startTime);
    return remainingWork / speed;
  }

  private minSample() {
    return _.minBy(this.samples, (sample) => sample.remainingTimeEstimate);
  }

  private maxSample() {
    return _.maxBy(this.samples, (sample) => sample.remainingTimeEstimate);
  }

  private dropOldSamples() {
    const now = Date.now();
    while (this.samples.length && now - this.samples[0].time > this.holdTime) {
      this.samples.shift();
    }
  }

  private updateRemainingTimeEstimate() {
    const minSample = this.minSample();
    const maxSample = this.maxSample();

    if (
      this.estimate === undefined ||
      this.estimate < minSample.remainingTimeEstimate ||
      this.estimate > maxSample.remainingTimeEstimate
    ) {
      this.estimate =
        (minSample.remainingTimeEstimate + maxSample.remainingTimeEstimate) / 2;
      this.coarserEstimate();
    }
  }

  private coarserEstimate() {
    let [minutes, seconds] = minutesAndSeconds(this.estimate);

    if (minutes >= 10) {
      this.coarseMinutesEstimate = Math.round(minutes / 10);
      this.coarseSecondsEstimate = undefined;
    } else if (minutes >= 3) {
      if (seconds > 30) {
        minutes++;
      }
      this.coarseMinutesEstimate = minutes;
      this.coarseSecondsEstimate = undefined;
    } else if (minutes >= 1) {
      this.coarseMinutesEstimate = minutes;
      this.coarseSecondsEstimate = Math.round(seconds / 30) * 30;
    } else if (seconds >= 15) {
      this.coarseMinutesEstimate = minutes;
      this.coarseSecondsEstimate = Math.round(seconds / 10) * 10;
    } else {
      this.coarseMinutesEstimate = 0;
      this.coarseSecondsEstimate = 0;
    }

    if (this.coarseSecondsEstimate === 60) {
      this.coarseMinutesEstimate++;
      this.coarseSecondsEstimate = 0;
    }
  }
}

interface Sample {
  time: number;
  remainingTimeEstimate: number;
}
