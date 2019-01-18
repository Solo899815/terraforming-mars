
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class BeamFromAThoriumAsteroid implements IProjectCard {
    public cost: number = 32;
    public tags: Array<Tags> = [Tags.JOVIAN, Tags.SPACE, Tags.ENERGY];
    public cardType: CardType = CardType.AUTOMATED;
    public name: string = "Beam From A Thorium Asteroid";
    public text: string = "Requires a jovian tag. Increase your heat production and energy production 3 steps each. Gain 1 victory point.";
    public description: string = "Nuclear energy is safe, especially when located on a remote asteroid rich in radioactive elements.";
    public play(player: Player, game: Game): Promise<void> {
        if (player.getTagCount(Tags.JOVIAN) < 1) {
            return Promise.reject("Requires a jovian tag");
        }
        player.heatProduction += 3;
        player.energyProduction += 3;
        player.victoryPoints++;
        return Promise.resolve();
    }
} 
