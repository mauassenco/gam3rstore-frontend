import { MAX_INSTALLMENT_QUANTITY, MONTHLY_INTEREST_RATE } from '../constants';
import Installment from './Installment';

export default class InstallmentCalculation {
  executar(
    baseValue: number,
    installmentQuantity: number = MAX_INSTALLMENT_QUANTITY,
    interestRate: number = MONTHLY_INTEREST_RATE,
  ): Installment {
    if (
      installmentQuantity < 2 ||
      installmentQuantity > MAX_INSTALLMENT_QUANTITY
    ) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${MAX_INSTALLMENT_QUANTITY}`,
      );
    }

    const totalWithInterest = this.calculateCompoundInterest(
      baseValue,
      interestRate,
      installmentQuantity,
    );

    return {
      installmentValue: this.withTwoDecimalPlaces(
        totalWithInterest / installmentQuantity,
      ),
      totalValue: this.withTwoDecimalPlaces(totalWithInterest),
      installmentQuantity,
      interestRate,
    };
  }

  private calculateCompoundInterest(
    promotionalPrice: number,
    monthlyRate: number,
    installmentQuantity: number,
  ) {
    return promotionalPrice * Math.pow(1 + monthlyRate, installmentQuantity);
  }

  private withTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
