import Unilectives from '../../../assets/unilectives.svg';

export type UnilectivesIconProps = {
  className: string;
};
function UnilectivesIcon({ className }: UnilectivesIconProps) {
  return (
    <div className={className}>
      <img src={Unilectives} alt="Unilectives logo" />
    </div>
  );
}
export default UnilectivesIcon;
