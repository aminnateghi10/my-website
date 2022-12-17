export interface InformationInterface {
    name: string,
    email: string,
    jab: string,
    resume_file:File,
    image:File,
    projectsCompleted: string,
    cupOfCoffee: string,
    satisfiedClients: string,
    nomineesWinner: string,
    biography: string,
    telegram:string,
    instagram:string,
    facebook:string,
    github:string,
}

export interface ServiceInterface {
    id:number,
    title:string,
    body:string,
    image:string,
    meta:object,
    created_at:string,
    updated_at:string,
}

export interface ExperienceInterface {
    id:number,
    type:string,
    title:string,
    body:string,
    start:string,
    end:string,
    meta:object,
    created_at:string,
    updated_at:string,
}

export interface ClientInterface {
    "id": number,
    "name": string,
    "job": string,
    "body": string,
    "img": string,
    "meta": string,
    "created_at": string,
    "updated_at": string
}

export interface SkillInterface {
    id: number,
    meta: {p:string,x:string},
    percent: string,
    title: string,
    created_at ?: string,
    updated_at ?: string
}

export interface TicketInterface {
    "id": number,
    "name": string,
    "email": string,
    "subject": string,
    "body": string,
}