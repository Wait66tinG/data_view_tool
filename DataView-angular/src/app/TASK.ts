export interface Task {
    id: number;
    taskName: string;
    belongToProject:string;
    // taskDetial:string;
    // taskStartDate:Date;
    // taskFinishDate:Date;

  }

export interface Project {
  id:number;
  projectName:string;
}

export interface isActive{
  HtmlClass :string;
  Project : Project;
}