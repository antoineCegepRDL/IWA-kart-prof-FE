import KartItem from '#types/KartItem';
import AInfoLine from '#components/AInfoLine';
interface PropsInterface {
  items: KartItem[];
}

const AReceiptInfo = ({ items }: PropsInterface) => {
  const subTotal = items.reduce((acc, x) => acc + x.quantityToBuy * ((1 - x.discountPercentage) * x.price), 0);
  const tvq = (subTotal * 0.09975).toFixed(2);
  const tps = (subTotal * 0.05).toFixed(2);
  const total = (subTotal + +tps + +tvq).toFixed(2);

  return (
    <div>
      <h3>Facture</h3>
      <AInfoLine
        title="Sous total"
        value={subTotal.toFixed(2)}
        suffix={'$'}
      />
      <AInfoLine
        title="TPS"
        value={tps}
        suffix={'$'}
      />
      <AInfoLine
        title="TVQ"
        value={tvq}
        suffix={'$'}
      />
      <AInfoLine
        title="Total"
        value={total}
        suffix={'$'}
      />
    </div>
  );
};

export default AReceiptInfo;
