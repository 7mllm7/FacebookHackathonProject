/**
 * Created by MLmediapps on 23/06/2016.
 */

import * as Backend from 'backend'

function delay(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), n);
    });
}

export async function fetchAll() {
    return await Backend.fetchGET('torches');
    // await delay(2000);
    // return [
    //     {
    //         id: "verylovelytorchid123",
    //         name: "My Torch!",
    //         runner: null,
    //         currentLocation: {
    //             longitude: 30.7,
    //             latitude: 30.4
    //         },
    //         currentRun : null
    //     }
    // ];
}

export async function pickup(torchId, userId, location) {
    return await Backend.fetchPOST(`torch/${torchId}/pickup`, {location, userId});

    // await delay(2000);
    // return [
    //     {
    //         id: "verylovelytorchid123",
    //         name: "My Torch!",
    //         currentLocation: location,
    //         currentRun: {
    //             name: "My Current Run",
    //             runner: userId,
    //             origin: {
    //                 longitude: 30.7,
    //                 latitude: 30.4
    //             }
    //         }
    //     }
    // ];
}

export async function drop(torchId, userId, location) {
    return await Backend.fetchPOST(`torch/${torchId}/drop`, {location, userId});
    // await delay(2000);
    // return [
    //     {
    //         id: "verylovelytorchid123",
    //         name: "My Torch!",
    //         currentLocation: location,
    //         currentRun: null
    //     }
    // ];
}