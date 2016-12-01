import { Xhr } from './common/Xhr';


global.app = function () {
    var xhr = new Xhr({json:true});

    xhr.get('http://localhost:3004/countries?_limit=10')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};
