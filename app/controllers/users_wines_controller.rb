class UsersWinesController < ApplicationController
  skip_before_action :confirm_authentication, only: [:index, :show, :create]
  before_action :set_users_wine, only: [:update, :destroy]

  # GET /users_wines
  # read any users entire cellar contents
  def index
    @users_wines = UsersWine.all

    render json: @users_wines
  end

  # GET /users_wines/1
  # ???
  def show
    users_wine = UsersWine.find(params[:id])
    render json: users_wine,  status: :ok 
  end

  # POST /users_wines
  # add to cellar , wine's quatity will be 1
  def create
    # @users_wine = UsersWine.create!(users_wine_params)
    # render json: @users_wine
    if current_user.users_wines.exists?(wine_id: params[:wine_id])
      render json: { error: "Wine already exists" }, status: :unprocessable_entity
    else
    @users_wine = current_user.users_wines.create!(users_wine_params.merge(quantity: 1))
    render json: @users_wine
  end
    # @users_wine = UsersWine.new(users_wine_params)

    # if @users_wine.save
    #   render json: @users_wine, status: :created, location: @users_wine
    # else
    #   render json: @users_wine.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /users_wines/1
  # update only wine's quantity 
  def update
      @users_wine.update(quantity: params[:quantity])
      render json: @users_wine, status: :accepted

    # if @users_wine.update(users_wine_params)
    #   render json: @users_wine
    # else
    #   render json: @users_wine.errors, status: :unprocessable_entity
    # end
  end

  # DELETE /users_wines/1
  # remove wine from cellar
  def destroy
    @users_wine.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_users_wine
      # @users_wine = UsersWine.find(params[:id])
      @users_wine = current_user.users_wines.find_by(params[:id])
      if !@users_wine
        render json:{ error: "Not authorized" }, status: :unauthorized
    end
    end

    # Only allow a list of trusted parameters through.
    def users_wine_params
      # params.fetch(:users_wine, {})
      params.permit(:wine_id, :quantity)
    end
end
