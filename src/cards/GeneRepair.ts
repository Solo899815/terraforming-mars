
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class GeneRepair implements IProjectCard {
    public cost: number = 12;
    public tags: Array<Tags> = [Tags.SCIENCE];
    public cardType: CardType = CardType.AUTOMATED;
    public name: string = "Gene Repair";
    public text: string = "Requires 3 science tags. Increase your mega credit production 2 steps. Gain 2 victory points.";
    public description: string = "Counters the inevitable damage from cosmis radiation and reverses many aging symptoms";
    public play(player: Player, game: Game): Promise<void> {
        if (player.getTagCount(Tags.SCIENCE) < 3) {
            return Promise.reject("Requires 3 science tags.");
        }
        player.megaCreditProduction += 2;
        player.victoryPoints += 2;
        return Promise.resolve();
    }
}
