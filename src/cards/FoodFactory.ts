
import {IProjectCard} from './IProjectCard';
import {Tags} from './Tags';
import {CardType} from './CardType';
import {Player} from '../Player';
import { Resources } from '../Resources';

export class FoodFactory implements IProjectCard {
  public cost: number = 12;
  public tags: Array<Tags> = [Tags.STEEL];
  public name: string = 'Food Factory';
  public cardType: CardType = CardType.AUTOMATED;
  public canPlay(player: Player): boolean {
    return player.getProduction(Resources.PLANTS) >= 1;
  }
  public play(player: Player) {
    player.setProduction(Resources.PLANTS,-1);
    player.setProduction(Resources.MEGACREDITS,4);
    return undefined;
  }
  public getVictoryPoints() {
    return 1;
  }
}
