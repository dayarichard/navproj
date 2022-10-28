import React, { ChangeEvent, Component } from 'react'

interface drawerState {
  selectedFiles: FileList | null;
  previewImages: Array<any>;
  progressInfos: Array<any>;
  message: Array<any>;
  imageInfos: Array<any>;
}

export class ImageUpload extends Component<{},drawerState> {
    state = {
        selectedFiles: null,
        previewImages: [],
        progressInfos: [],
        message: [],
  
        imageInfos: [],
      };

      selectFiles(fileList:any ) {
        

        let images:Array<any> = [];
    
        for (let i = 0; i < fileList!.length; i++) {
          images.push(URL.createObjectURL(fileList[i]))
        }
    
        this.setState({
          progressInfos: [],
          message: [],
          selectedFiles: fileList,
          previewImages: images
        });
      }
  render() {
    const { selectedFiles, previewImages, progressInfos, message, imageInfos } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" multiple accept=".jpg,.png,.jpeg" onChange={(event)=>this.selectFiles(event.target?.files )} />
            </label>
          </div>

          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={!selectedFiles}
              onClick={()=>{}}
            >
              Upload
            </button>
          </div>
        </div>

        {progressInfos &&
          progressInfos.map((progressInfo:any, index) => (
            <div className="mb-2" key={index}>
              <span>{progressInfo.fileName}</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow={progressInfo.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: progressInfo.percentage + "%" }}
                >
                  {progressInfo.percentage}%
                </div>
              </div>
            </div>
          ))}

        {previewImages && (
          <div>
            {previewImages.map((img, i) => {
              return <img className="preview" src={img} alt={"image-" + i}  key={i}/>;
            })}
          </div>
        )}

        {message.length > 0 && (
          <div className="alert alert-secondary" role="alert">
            <ul>
              {message.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        )}

        <div className="card mt-3">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {imageInfos &&
              imageInfos.map((img:any, index) => (
                <li className="list-group-item" key={index}>
                  <p><a href={img.url}>{img.name}</a></p>
                  <img src={img.url} alt={img.name} height="80px" />
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

