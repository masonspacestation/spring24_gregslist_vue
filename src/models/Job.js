



export class Job {
  constructor(data) {
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)

    this.creatorId = data.creatorId
    this.creator = data.creator //has _id, id, name, picture
    this._id = data._id
    this.id = data.id
  }
}


/**
 {
    "_id": "6476e82a403259fa173a75ae",
    "company": "SuperDuperCoolPlace",
    "jobTitle": "Software Developer",
    "hours": 40,
    "rate": 1000000,
    "description": "Are you Super Duper Cool enough?",
    "creatorId": "646424169346a51b7a721e71",
    "createdAt": "2023-05-31T06:24:42.302Z",
    "updatedAt": "2023-05-31T06:24:42.302Z",
    "__v": 0,
    "creator": {
        "_id": "646424169346a51b7a721e71",
        "name": "Code-y BeepBoop",
        "picture": "https://68.media.tumblr.com/66dd12f943a2496adcb6d556025a2d96/tumblr_oklf80RKa21shq9dbo1_400.gif",
        "id": "646424169346a51b7a721e71"
    },
    "id": "6476e82a403259fa173a75ae"
}
 */