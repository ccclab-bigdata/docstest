# This file is a part of JuliaFEM.
# License is MIT: see https://github.com/JuliaFEM/AbaqusReader.jl/blob/master/LICENSE

using AbaqusReader

@testset "test abaqus_download" begin
    ENV_ = empty(ENV)
    fn = tempname()
    touch(fn)
    model_name = basename(fn)
    ENV_["ABAQUS_DOWNLOAD_DIR"] = dirname(fn)
    @test abaqus_download(model_name, ENV_) == fn
    isfile(fn) && rm(fn)
    @test_throws Exception abaqus_download(model_name, ENV_)
    ENV_["ABAQUS_DOWNLOAD_URL"] = "https://models.com"
    @test abaqus_download(model_name, ENV_; dryrun=true) == fn
end
