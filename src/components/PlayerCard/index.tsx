import { ButtonIcon } from "@components/ButtonIcon";
import * as S from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <S.Container>
      <S.Icon name="person" />

      <S.Name>{name}</S.Name>

      <ButtonIcon onPress={onRemove} icon="close" type="SECONDARY" />
    </S.Container>
  );
}
