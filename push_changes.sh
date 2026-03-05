#!/bin/bash

# Скрипт для отправки изменений в репозиторий DemNataV/IDL_MeD

echo "Проверка текущего состояния репозитория..."
git status

echo -e "\nТекущий коммит:"
git log --oneline -3

echo -e "\nПопытка отправки изменений..."
echo "Если запросит логин/пароль:"
echo "1. Логин: DemNataV"
echo "2. Пароль: ваш personal access token (не пароль от GitHub!)"
echo -e "\nЧтобы создать personal access token:"
echo "1. Зайдите на GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)"
echo "2. Создайте новый токен с правами repo"
echo "3. Скопируйте токен и используйте его как пароль"
echo -e "\nИли настройте SSH ключ:"
echo "1. cat ~/.ssh/id_ed25519.pub"
echo "2. Скопируйте публичный ключ"
echo "3. Добавьте его в GitHub: Settings → SSH and GPG keys"
echo "4. git remote set-url origin git@github.com:DemNataV/IDL_MeD.git"
echo -e "\nВыполняю push..."
git push origin main