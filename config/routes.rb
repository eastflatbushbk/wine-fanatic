Rails.application.routes.draw do
  
  resources :users_wines
  
  resources :wines do   
    resources :reviews, only: [:index, :show]
  end
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  
  resources :users, only: [:show, :create, :index]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
