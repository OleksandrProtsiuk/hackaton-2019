Rails.application.routes.draw do
  resources :devises
  root 'static#personal', as: 'root'

  post '/devises-data', to: 'devises#resiver'


  get 'static/personal'
  get 'static/about'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
