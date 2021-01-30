//adding new chat documents
//setting up a real-time chat listener to get new chats
//updating the username
//updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
    this.unsub;
  }

  async addChat(message) {
    // format a chat object
    const now = new Date();
    const chat = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    //save the chat object
    //use await in front of something that returns a promise(async function)
    const response = await this.chats.add(chat);
    return response;
  }
  getChats(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            // update the Ui
            callback(change.doc.data());
          }
        });
      });
  }

  updateName(username) {
    this.username = username;
  }

  updateRoom(room) {
    this.room = room;
    console.log("room updated");
    if (this.unsub) {
      this.unsub();
    }
  }
}

const chatroom = new Chatroom("gaming", "shaun");
//console.log(chatroom);

// chatroom
//   .addChat("hello everyone")
//   .then(() => console.log("chat added"))
//   .catch((err) => console.log(err));

chatroom.getChats((data) => {
  console.log(data);
});

setTimeout(() => {
  chatroom.updateRoom("gaming");
  chatroom.updateName("Yoshi");

  chatroom.getChats((data) => {
    console.log(data);
  });

  chatroom.addChat("hello");
}, 3000);
