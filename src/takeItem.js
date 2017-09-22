export default function takeItem(player, item) {
  const newHealth = player.health + (item.healthPoints || 0);
  const newThirst = player.thirst + (item.thirstPoints || 0);
  const newHunger = player.hunger + (item.hungerPoints || 0);

  return {
    ...player,
    health: newHealth > player.maxHealth ? player.maxHealth : newHealth,
    thirst: newThirst > player.maxThirst ? player.maxThirst : newThirst,
    hunger: newHunger > player.maxHunger ? player.maxHunger : newHunger,
  };
}
