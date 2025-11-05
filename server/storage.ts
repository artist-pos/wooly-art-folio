import type { InsertSubmission, Submission } from "@shared/schema";

export interface IStorage {
  getSubmissions(): Promise<Submission[]>;
  createSubmission(submission: InsertSubmission): Promise<Submission>;
}

export class MemStorage implements IStorage {
  private submissions: Submission[] = [];
  private nextId = 1;

  async getSubmissions(): Promise<Submission[]> {
    return this.submissions;
  }

  async createSubmission(submission: InsertSubmission): Promise<Submission> {
    const newSubmission: Submission = {
      id: this.nextId++,
      data: submission.data,
      createdAt: new Date(),
    };
    this.submissions.push(newSubmission);
    return newSubmission;
  }
}

export const storage = new MemStorage();
