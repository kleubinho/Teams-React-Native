import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useState } from "react";
import { FlatList } from "react-native";
import * as S from "./styles"; //importando tudo de dentro do styles e colocando S como nome

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["", ""]);
  return (
    <S.Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />

    </S.Container>
  );
}
