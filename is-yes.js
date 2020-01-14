export default function isYes(response) {
    const myString = response.toLowerCase();

    if (myString === 'yes' || myString === 'absolutely' || myString === 'y' || myString === 'yep')
        return true;
    else 
        return false;
}
