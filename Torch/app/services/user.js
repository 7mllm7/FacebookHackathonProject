/**
 * Created by MLmediapps on 23/06/2016.
 */

export async function create(user) {
    await delay(2000);
    return {
        id: "verylovelyuserid345",
        displayName: user.displayName
    };
}