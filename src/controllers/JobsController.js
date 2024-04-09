import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";



export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getJobs)
      .get('/search', this.searchJobs)
      .get('/:jobId', this.findJobById)
  }


  async getJobs(request, response, next) {
    try {
      const jobs = await jobsService.getJobs()
      response.send(jobs)
    } catch (error) {
      next(error)
    }
  }


  async searchJobs(request, response, next) {
    try {
      const searchQuery = request.query
      const jobs = await jobsService.searchJobs(searchQuery)
      response.send(jobs)
    } catch (error) {
      next(error)
    }
  }


  async findJobById(request, response, next) {
    try {
      const jobId = request.params.jobId
      const job = await jobsService.findJobById(jobId)
      response.send(job)
    } catch (error) {
      next(error)
    }
  }




}