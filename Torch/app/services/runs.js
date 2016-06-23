/**
 * Created by MLmediapps on 23/06/2016.
 */

function delay(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), n);
    });
}

export async function fetchRuns(torchId) {
    await delay(2000);
    return [
        {
            name: "My First Run",
            runner: "someuserid1",
            origin: {
                longitude: 29.8,
                latitude: 30.0
            },
            destination: {
                longitude: 30.1,
                latitude: 30.1
            }
        },
        {
            name: "My Second Run",
            runner: "someotheruserid2",
            origin: {
                longitude: 30.1,
                latitude: 30.1
            },
            destination: {
                longitude: 29.9,
                latitude: 29.8
            }
        },
        {
            name: "My Third Run",
            runner: "yetanotheruserid7",
            origin: {
                longitude: 29.9,
                latitude: 29.8
            },
            destination: {
                longitude: 30.7,
                latitude: 30.4
            }
        }
    ];
}