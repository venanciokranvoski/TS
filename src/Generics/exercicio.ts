type VotationOpcion = {
  numerosDeVotos: number;
  opcao: string;
}

export class Votation {
    private _votations: VotationOpcion[] = []; // array
    constructor(public details: string) {} // argumento em string

    addVotationOption(votationOption: VotationOpcion): void {
         this._votations.push(votationOption);
    }

    vote(votationIndex: number): void {
      if (!this._votations[votationIndex]) return;
      this._votations[votationIndex].numerosDeVotos += 1;
    }
}

// -------------------- Outra classe
export class VotationApp {
  private votations: Votation[] = [];


  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }


  showVotations(): void {
    for(const votation of this.votations) {
      console.log(votation.details);
    }
  }
}



const votationApp = new VotationApp();


votationApp.showVotations();
