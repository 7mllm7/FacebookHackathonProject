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
            name: "Moti's Run",
            userImage: 'https://cdn.vectorstock.com/i/composite/23,07/athlete-avatar-design-vector-7552307.jpg',
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
            name: "Vlad's Run",
            userImage: 'https://cdn.vectorstock.com/i/composite/23,99/athlete-avatar-design-vector-7552399.jpg',
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
            name: "Gilad Run",
            userImage: 'https://www.colourbox.com/preview/17728757-athlete-avatar-design.jpg',
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