/* eslint-disable no-console */
import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";
import { api } from "./AxiosService.js"




class JobsService {
  async getJobs() {
    const response = await api.get('api/jobs')
    console.log(response.data);
    AppState.jobs = response.data.map(job => new Job(job))
    console.log('appstate:', AppState.jobs);
  }

}


export const jobsService = new JobsService