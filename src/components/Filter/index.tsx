import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = S.FilterStyleProps &
  TouchableOpacityProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <S.Container isActive={isActive} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
