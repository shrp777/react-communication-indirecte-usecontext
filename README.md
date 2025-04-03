# Illustration du concept de communication directe entre composants dans une application React

- Communication descendante : parent -> enfant
- Communication ascendante : enfant -> parent

## Scénario

- __Homer__ est le composant _parent_. Il contient le composant __Bart__.
- __Bart__ est un composant _enfant_. Il est contenu par le composant __Homer__.
- __Homer__ passe une référence à la fonction _callback_ que devra appeler son composant enfant : __Bart__.
- Lorsque __Bart__ appelle la fonction _callback_ de son composant parent, ce dernier réagit et met à jour son état interne.

A noter : __Homer__ est un composant _enfant_ du composant _racine_ __App__.

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
