Rails.application.routes.draw do
  resources :letter_blocks
  resources :prose_blocks
  resources :letters
  resources :users
  # Alex, remember to go through and cut unused routes.

  # Defines the root path route ("/")
  # root "articles#index"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  
end
