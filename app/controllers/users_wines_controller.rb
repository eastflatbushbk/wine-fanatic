class UsersWinesController < ApplicationController
  before_action :set_users_wine, only: [:show, :update, :destroy]

  # GET /users_wines
  def index
    @users_wines = UsersWine.all

    render json: @users_wines
  end

  # GET /users_wines/1
  def show
    render json: @users_wine
  end

  # POST /users_wines
  def create
    @users_wine = UsersWine.create!(users_wine_params)
    render json: @users_wine

    # @users_wine = UsersWine.new(users_wine_params)

    # if @users_wine.save
    #   render json: @users_wine, status: :created, location: @users_wine
    # else
    #   render json: @users_wine.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /users_wines/1
  def update
    if @users_wine.update(users_wine_params)
      render json: @users_wine
    else
      render json: @users_wine.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users_wines/1
  def destroy
    @users_wine.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_users_wine
      @users_wine = UsersWine.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def users_wine_params
      # params.fetch(:users_wine, {})
      params.permit(:user_id, :wine_id, :quantity)
    end
end
