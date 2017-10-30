export class IChallenges {
     challenge: IChallenge[];
     error: IChallengeError;
}

export class IChallenge {
    sequence: string;
    challenge: string;
    status: string;
    attempt:number;
    choices:any[];
    token: string;
}

export class IChallengeResponse {
    sequence: string;
    challenge: string;
    status: string;
    attempt:number;
    choices:any[];
    token: string;
}

export class IChallengeError {
    code: string;
    message: string;
}
  

