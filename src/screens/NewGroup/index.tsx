import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import {UsersThree} from 'phosphor-react-native'
import * as S from './styles'

export function NewGroup(){
    return(
        <S.Container>
            <Header showBackButton/>

            <S.Content>
                <S.Icon/>
                <Highlight title='Nova turma' subtitle='crie uma turma para adicionar as pessoas' />
            
                <Button title='Criar' />
            </S.Content>
        </S.Container>
    )
}