import fs from "fs/promises"
import fsn from "fs"
import path from "path"

// console.log(fs)

const basePath = "D:\\Development\\Video_79"

const files = await fs.readdir(basePath)
console.log(files)

// for loop to iterate through the array

for (let item of files) {
    let ext = item.split(".")[item.split(".").length - 1]
    console.log(ext)
    if (item.split(".").length > 1 && ext != "js" && ext != "json") {
        if (fsn.existsSync(path.join(basePath, ext))) {
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
    }
}