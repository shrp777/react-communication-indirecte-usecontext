# Communication indirecte entre composants par contexte partagé avec useContext dans une application React

- __Objectif__ : éviter le ___"Props Drilling"___ (soit, la communication de messages par l'intermédiaire de composants non concernés).

- __Solution employée__ : Hook useContext [Hook useContext](https://react.dev/reference/react/useContext)

## Scénario

- __Homer__ et __Bart__ sont 2 composants enfants du composant _racine_ __App__.
- Lorsque __Bart__ met à jour le contexte partagé (_MessagesContext_), __Homer__ réagit automatiquement en affichant les messages mis à jour.

## Commandes utiles

$ `bun install`

$ `bun run dev`

--

!["Logotype Shrp"](https://sherpa.one/images/sherpa-logotype.png)

__Alexandre Leroux__  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
