import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

(function () {
    File.prototype.arrayBuffer = File.prototype.arrayBuffer || myArrayBuffer
    Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || myArrayBuffer

    function myArrayBuffer(this: File | Blob): Promise<ArrayBuffer> {
        return new Promise((resolve) => {
            let fr = new FileReader()
            fr.onload = () => {
                resolve(fr.result as ArrayBuffer)
            }
            fr.readAsArrayBuffer(this)
        })
    }
})()

ReactDOM.render(<App/>, document.querySelector("#root"))
