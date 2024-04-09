import { dbContext } from "../db/DbContext.js"




class JobsService {


  async getJobs() {
    const jobs = await dbContext.Job.find()
    return jobs
  }


  async searchJobs(searchQuery) {
    const jobs = await dbContext.Job.find(searchQuery)
    return jobs
  }


  async findJobById(jobId) {
    const job = await dbContext.Job.findById(jobId)
    if (!job) throw new Error(`Job ID: ${jobId} didn't work.`)
    return job
  }

}


export const jobsService = new JobsService()

