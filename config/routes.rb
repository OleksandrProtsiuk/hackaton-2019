Rails.application.routes.draw do
  root 'static#personal', as: 'root'

  get 'static/personal'
  get 'static/about'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
