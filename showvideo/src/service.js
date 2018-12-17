// function kuy() {
//     alert('YOLO');
// }
// const url = 'http://127.0.0.1:8080/';

// async function getDiscovery() {
//     try {
//         const response = await axios.get(url + 'discovery');
//         const data = response.data.items;

//         $.each(data, function (key, value) {

//             const {
//                 etag,
//                 id,
//                 kind,
//                 snippet
//             } = value;

//             // const title = snippet.title;
//             const thumbnails = snippet.thumbnails["high"];

//             $('#app').append(`
//                 <div class="item">                      
//                   <!--<div class="videoWrapper">                                             
//                      <iframe width="560" height="315" 
//                      src="https://www.youtube.com/embed/${id.videoId}" 
//                      frameborder="0" allow="accelerometer; autoplay; 
//                      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                   </div>-->
//                   <!-- <div class="thumbnails">
//                     <img src="${thumbnails.url}" style="height:${thumbnails.height};width:${thumbnails.width}"></img>
//                   </div>-->
//                   <p>${snippet.title}</p>
//                   <a href="https://www.youtube.com/channel/${snippet.channelId}">
//                     ${snippet.channelTitle}
//                   </a>
//                   <p>${snippet.description}</p>
//                 </div>
//                 `);


//         });

//         console.log(data);
//     } catch (error) {
//         alert('oops');
//         console.error(error);
//     }
// }
// $().ready(function () {
//     alert('YOLO');
// });

