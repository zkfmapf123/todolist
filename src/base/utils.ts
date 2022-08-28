/**
 * @desc
 * select random color
 */
class RandomColor {
  private getColor(): string[] {
    return ['red', 'blue', 'green', 'yellow', 'gray', 'orange', 'black', 'purple']
  }

  private getRandNum(max: number, min: number): number {
    return Math.round(Math.random() * (max - 1) - min) + min
  }

  get color(): string {
    return this.getColor()[this.getRandNum(this.getColor().length, 0)]
  }
}

export const randomColor = new RandomColor()
