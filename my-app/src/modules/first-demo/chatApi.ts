class Test {
    subscribeToFriendStatus = (id: string, callback: any) => {
        callback({ isOnline: true })
    }
    unsubscribeFromFriendStatus = (id: string, callback: any) => {
        callback({ isOnline: false })
        //         if (id === '1') {
        //             callback({isOnline:'Online'})
        //         } else {
        //             callback({isOnline:'Offline'})
        // }
    }
}
export default new Test()