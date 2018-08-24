namespace Utils {

    export class ObjectUtils {

        // -------------------------------------------------------------------------
        public static loadJson(fileName: string): Promise<any> {

            return new Promise(function (resolve, reject) {

                var request = new XMLHttpRequest();

                request.open('GET', fileName, true);
                request.responseType = 'json';

                request.onload = function () {
                    if (request.status === 200) {
                        resolve(request.response);
                    } else {
                        reject(new Error(`Error loading ${fileName}: ${request.statusText}`));
                    }
                };

                request.onerror = function () {
                    reject(new Error(`Network error while loading ${fileName}`));
                };

                request.send();
            });
        }

        // -------------------------------------------------------------------------
        public static loadValuesIntoObject(jsonData: any, targetObject: any) {

            console.log(`----- loading values into ${targetObject.name} -----`);

            for (let property in jsonData) {
                console.log(`name = ${property}, value = ${jsonData[property]}`);
                targetObject[property] = jsonData[property];
            }

            console.log("------------------------------------------------");
        }
    }
}
