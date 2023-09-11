class YoutubeChannel {
  constructor() {
    this.videoTitle = "";
    this.subscribers = [];
  }
  placeNewVideo(title) {
    this.videoTitle = title;
    // send notification to all subscribers
    this.notifyAll();
  }

  notifyAll() {
    this.subscribers.forEach((sub) => sub.update(this));
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unSubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub != subscriber);
  }
}

class IndividualPerson {
  update(YoutubeChannel) {
    console.log(`New Video Uploaded ${YoutubeChannel.videoTitle}`);
  }
}

class BusinessChannel {
  update(YoutubeChannel) {
    console.log(`New Video Uploaded ${YoutubeChannel.videoTitle}`);
  }
}

const heroProgrammer = new YoutubeChannel();
heroProgrammer.placeNewVideo("test video");

const ahmed = new IndividualPerson();
heroProgrammer.subscribe(ahmed);

heroProgrammer.placeNewVideo("js design");
const nada = new IndividualPerson();
heroProgrammer.subscribe(nada);

heroProgrammer.placeNewVideo("js design part2 ");
