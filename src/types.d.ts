interface IPlayers {
    data:IPlayer[],
    meta?:Imeta

}


interface Imeta {
    total_pages: number,
    current_page: number,
    next_page: number,
    per_page: number,
    total_count: number
  }

interface IPlayer {
    id: number,
    first_name: string,
    last_name: string,
    position: string,
    height_feet: number,
    height_inches: number,
    weight_pounds: number,
    team?: ITeam,
    favorite:boolean
}

interface ITeam {
    id: number,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    name: string
}

type FavoratePlayer = (selectedPlaer: Player) => void;