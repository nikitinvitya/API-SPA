export const userAlbumLoader = ({params: {id, albumID}}) => {
    const albumPhotosPromise = fetch(`http://jsonplaceholder.typicode.com/photos`)
        .then(response => response.json())
        .then(photos => photos.filter(photo => photo.albumId === Number(albumID)));
    const userDataPromise = fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
    return {userDataPromise, albumPhotosPromise};
};

export const albumsLoader = () => {
    const albums = fetch('http://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
    return {albums}
}

export const usersLoader = () => {
    const usersPromise = fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
    return {usersPromise}
}

export const userLoader = ({params: {id}}) => {
    const userDataPromise = fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())

    const userAlbumsPromise = fetch(`http://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then(response => response.json())

    return {userDataPromise, userAlbumsPromise}
}
