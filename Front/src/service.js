$().ready(function () {

    const url = 'http://127.0.0.1:8080/';

    // async function getDiscovery() {
    //     const path = url + 'discovery';
    //     try {
    //         const response = await axios.get(path);
    //         console.log(response);
    //     } catch (error) {
    //         alert('oops');
    //         console.error(error);
    //     }
    // }

    function getDiscovery() {
        const path = url + 'discovery';
        axios.get(path)
            .then((result) => {
                console.log("​result", result);
            }).catch((err) => {
                console.log("error", err);
            });
    }

    getDiscovery();

});