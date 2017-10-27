export class IChallenges {
     challenge: IChallenge[];
     error: IChallengeError;
}

export class IChallenge {
    id: string;
    challenge: string;
    status: string;
    choices:any[];
}

export class IChallengeError {
    code: string;
    message: string;
}
  

