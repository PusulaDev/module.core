import fs from "fs";
import path from "path";

const directory = "dist";

if (fs.existsSync(directory)) {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(directory, file), (err) => {
                if (err) throw err;
            });
        }
    });
}
