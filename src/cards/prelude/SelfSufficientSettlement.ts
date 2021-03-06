import { Tags } from "../Tags";
import { Player } from "../../Player";
import { Game } from "../../Game";
import { PreludeCard } from "./PreludeCard";
import { IProjectCard } from "../IProjectCard";
import { SelectSpace } from "../../inputs/SelectSpace";
import { ISpace } from "../../ISpace";
import { Resources } from '../../Resources';
import { CardName } from '../../CardName';

export class SelfSufficientSettlement extends PreludeCard implements IProjectCard {
    public tags: Array<Tags> = [Tags.STEEL, Tags.CITY];
    public name: CardName = CardName.SELF_SUFFICIENT_SETTLEMENT;
    public play(player: Player, game: Game) {     
        return new SelectSpace("Select space for city tile", game.board.getAvailableSpacesForCity(player), (space: ISpace) => {
            game.addCityTile(player, space.id);
            player.setProduction(Resources.MEGACREDITS,2);
            return undefined;
        }); 
    }
}

