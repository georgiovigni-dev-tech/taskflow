# 📝 TaskFlow

**TaskFlow** est une application de gestion de tâches (ToDo List) construite avec **React + Vite**.  
Elle permet d’ajouter, compléter et supprimer des tâches en toute simplicité — le tout avec une interface fluide et moderne.

---

## 🚀 Fonctionnalités

- ✅ Ajouter une nouvelle tâche  
- ✏️ Marquer une tâche comme terminée (clic sur la tâche)  
- ❌ Supprimer une tâche  
- 📊 Affichage dynamique du nombre de tâches restantes et complétées  
---

## 🧠 Structure du projet

src/
├── Components/
│ ├── header/
│ │ └── header.jsx
│ ├── footer/
│ │ └── footer.jsx
│ ├── taskinput/
│ │ └── taskinput.jsx
│ ├── taskitem/
│ │ └── taskitem.jsx
│ └── taskList/
│ └── taskList.jsx
├── TaskContainer.jsx
├── App.jsx
├── main.jsx
└── assets/


---

## ⚙️ Installation et lancement

### 1️⃣ Cloner le dépôt
```bash
git clone https://github.com/georgiovigni-dev-tech/taskflow.git
cd taskflow
npm install
npm run dev
http://localhost:5173

🧩 Technologies utilisées

⚛️ React (hooks : useState)

⚡ Vite (pour un démarrage ultra rapide)

🎨 CSS Modules (pour un style isolé et maintenable)

💅 Classes utilitaires (box, button-primary, etc.)

📁 Structure logique

TaskContainer.jsx : cœur de la logique (état global, ajout, suppression, édition)

TaskInput.jsx : champ de saisie et bouton d’ajout

TaskList.jsx : affichage conditionnel des tâches

TaskItem.jsx : affichage individuel d’une tâche (cliquable)

Footer.jsx : résumé des tâches complétées

Header.jsx : entête avec logo et slogan

#🧠 Améliorations possibles

💾 Sauvegarde automatique dans localStorage

📅 Filtrage par statut (terminée / en cours)

TaskContainer.jsx : cœur de la logique (état global, ajout, suppression, édition)

TaskInput.jsx : champ de saisie et bouton d’ajout

TaskList.jsx : affichage conditionnel des tâches

TaskItem.jsx : affichage individuel d’une tâche (cliquable)

Footer.jsx : résumé des tâches complétées

Header.jsx : entête avec logo et slogan

🧠 Améliorations possibles

💾 Sauvegarde automatique dans localStorage

🌓 Thème clair/sombre

📅 Filtrage par statut (terminée / en cours)

📱 Interface responsive améliorée

👨‍💻 Auteur

Gio Vignizogbin
📧 georgiovignizogbin@gmail.com

💼 Projet personnel d’apprentissage React

🪪 Licence

Ce projet est libre d’utilisation à des fins éducatives et personnelles.
© 2025 Gio Vignizogbin. Tous droits réservés.

